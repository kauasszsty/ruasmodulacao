class TenCodesPage extends Page {
    getDisplayName() {
        return "10 Códigos";
    }
    getDisplayEmoji() {
        return "📻";
    }

    hideFromPageList() {
        return !Boolean( localStorage.getItem("showhidden") );
    }

    setup() {
		
	}
}
