function highlightPMsModule() {
    const config = {
        projectManagers: ['TR','BK','ERI', 'CRA', 'LSC', 'LT', 'JK', 'CL', 'LK','CH', 'RAW', 'BAL', 'DS', 'MIH', 'EBO', 'AST', 'TW', 'MB']
    };

    function highlightPMs() {
        $('.content').find('.table-label-anx-private').each(function(i, val) {
            if (config.projectManagers.includes($(val).text())) {
                $(val).css({
                    'color': '#640000',
                    'border-left': '8px solid #FF0000'
                });
            }
        });
    }

    try {
        highlightPMs();
    } catch (e) {
        console.error("Error in highlightPMs:", e);
    }
}

highlightPMsModule();
