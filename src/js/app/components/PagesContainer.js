import BaseComponent from 'BaseComponent'
import AppConstants from 'AppConstants'
import AppStore from 'AppStore'
import BasePager from 'BasePager'
import Router from 'Router'
import Home from 'Home'
import HomeTemplate from 'Home_hbs'
import About from 'About'
import AboutTemplate from 'About_hbs'
import Contact from 'Contact'
import ContactTemplate from 'Contact_hbs'

class PagesContainer extends BasePager {
	constructor() {
		super()
		this.didHasherChange = this.didHasherChange.bind(this)
	}
	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
		super.componentWillMount()
	}
	componentDidMount() {
		super.componentDidMount()
		this.didHasherChange()
	}
	componentWillUnmount() {
		AppStore.off(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
		super.componentWillUnmount()
	}
	didHasherChange() {
		var hash = Router.getNewHash()
		var type = undefined
		var template = undefined
		switch(hash.parent) {
			case 'about':
				type = About
				template = AboutTemplate
				break
			case 'contact':
				type = Contact
				template = ContactTemplate
				break
			case 'works':
				type = Home
				template = HomeTemplate
				break
			default:
				type = Home
				template = HomeTemplate
		}
		this.setupNewComponent(hash.parent, type, template)
	}
}

export default PagesContainer



