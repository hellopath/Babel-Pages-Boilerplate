import slug from 'to-slug-case'

class BaseComponent {
	constructor() {
		this.domIsReady = false
		this.componentDidMount = this.componentDidMount.bind(this)
	}
	componentWillMount() {
	}
	componentDidMount() {
		this.domIsReady = true
		this.resize()
	}
	render(childId, parentId, template, object) {
		this.componentWillMount()
		this.childId = childId
		this.parentId = parentId
		this.parent = (parentId instanceof jQuery) ? parentId : $(this.parentId)
		this.child = (template == undefined) ? $('<div></div>') : $(template(object))
		if(this.child.attr('id') == undefined) this.child.attr('id', slug(childId))
		this.child.ready(this.componentDidMount)
		this.parent.append(this.child)
	}
	remove() {
		this.componentWillUnmount()
		this.child.remove()
	}
	resize() {
	}
	componentWillUnmount() {
	}
}

export default BaseComponent

