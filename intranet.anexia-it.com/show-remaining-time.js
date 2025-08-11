function showRemainingTimeModule() {
    const config = {
        targetHours: 38.5
    };

    function zeroPad(num, places) {
        const zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }

    function sumBreaks(sel) {
        let breakHours = 0,
            breakMinutes = 0;
        sel.find('.not-present').each(function(i, val) {
            breakHours += parseInt($(val).find('td:last').html().split(':')[0]);
            breakMinutes += parseInt($(val).find('td:last').html().split(':')[1]);
        });
        breakHours += Math.floor(breakMinutes / 60);
        breakMinutes = breakMinutes % 60;
        return 'Pause: <span style="opacity:0.8;">' + zeroPad(breakHours, 2) + ' Stunden ' + zeroPad(breakMinutes, 2) + ' Minuten</span>';
    }

    function showRemainingTime() {
        const selInfoTable = $('#my_presence_info_table');
        const selInfoTableTime = $('.my_presence_info_table_time');
        const targetHours = config.targetHours;

        const timeParts = selInfoTableTime.text().split('|')[0].split(' ');
        const hoursDone = parseInt(timeParts[0]) || 0;
        const minutesDone = parseInt(timeParts[2]) || 0;

        const strOriginal = selInfoTableTime.html().split('|')[0];
        const now = new Date();
        const remainingMinutes = (targetHours / 5 * 60) - (hoursDone * 60 + minutesDone);
        const projectedTime = new Date(now.getTime() + remainingMinutes * 60000);
        const strTarget = projectedTime.getHours() + ':' + zeroPad(projectedTime.getMinutes(), 2);

        let minutesRemaining = Math.abs(remainingMinutes);
        const overTimeIndicator = remainingMinutes > 0 ? '-' : '+';
        const strRemaining = overTimeIndicator + ' ' + Math.floor(minutesRemaining / 60) + 'h ' + (minutesRemaining % 60) + 'm';

        const strBreak = sumBreaks(selInfoTable);

        selInfoTableTime.html([strOriginal + ' ', ' ' + strBreak + ' ', ' ' + strTarget + ' ', ' ' + strRemaining].join('|'));

        const alertDiv = document.querySelector("#my-presence-info-day > div.alert");
        alertDiv.classList.remove("alert-warning", "alert-danger", "alert-success");
        alertDiv.classList.add(remainingMinutes > 0 ? "alert-danger" : "alert-success");
    }

    setInterval(() => {
        try {
            showRemainingTime();
        } catch (e) {
            console.error("Error in showRemainingTime:", e);
        }
    }, 1000);
}

showRemainingTimeModule()
