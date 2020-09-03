class element{
    construct(type,props,children) {
        this.type = type
        this.props = props
        this.children = children
    }
}

const createElement = function(type,props,children) {
    return element(type,props,children)
}


export { createElement }