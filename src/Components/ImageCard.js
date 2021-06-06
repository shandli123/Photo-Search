import React from 'react'


class ImageCard extends React.Component {
    constructor(props) {

        super(props)
        this.state = { span: 0 }
        //when we want to reference DOM elements
        this.imageref = React.createRef();

    }
    componentDidMount() {
        this.imageref.current.addEventListener('load', this.setSpans)
    }
    setSpans = () => {
        const height = this.imageref.current.clientHeight;
        //   this will determine the number of spans we will be requiring for each image and 1 extra so that if image can take more size it can take 1 more span since grid-auto-row=150px height of each ro is 10 therefore we divided image height with 10
        const span = Math.ceil(height / 10 );
        this.setState({ span:span })
    }
    render() {

        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span  ${this.state.span}` }}>
                <img ref={this.imageref} alt={description} src={urls.regular} />
            </div>
        )
    }
}
export default ImageCard