import BaseComponent from 'BaseComponent'
import FrontContainer from 'FrontContainer'
import PagesContainer from 'PagesContainer'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import AppActions from 'AppActions'

class AppTemplate extends BaseComponent {
	constructor() {
		super()
		this.resize = this.resize.bind(this)
	}
	render(parent) {
		super.render('AppTemplate', parent, undefined)
	}
	componentWillMount() {
		super.componentWillMount()
	}
	componentDidMount() {
		this.frontContainer = new FrontContainer()
		this.frontContainer.render('#app-template')

		this.pagesContainer = new PagesContainer()
		this.pagesContainer.render('#app-template')

		setTimeout(()=>{
			this.onReady()
		}, 0)

		GlobalEvents.resize()

		super.componentDidMount()
	}
	onReady() {
		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize)
	}
	resize() {
		// this.pagesContainer.resize()
		this.frontContainer.resize()
		super.resize()
	}
}

export default AppTemplate

