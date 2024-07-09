class InitPageLoad {

    constructor(pageName) {

        switch(pageName) {
            case 'Home':
                this.initHomePage();
                break;
            default: break;
        }
    }

    initHomePage() {
        const utilityHelper = new UtilityHelper();
        const navHelper = new NavigationHelper();
        utilityHelper.addFunctionToDomEvent("DOMContentLoaded", utilityHelper.initFadeInListener());
        utilityHelper.addFunctionToDomEvent("DOMContentLoaded", utilityHelper.initNavNightTimeEffect());
        utilityHelper.addFunctionToWindowEvent("scroll", navHelper.checkNav());
    }
}