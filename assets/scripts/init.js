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
        utilityHelper.addFunctionToWindowEvent("scroll", navHelper.checkNav());
    }
}