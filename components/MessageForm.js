import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitMessage} from '../actions/actions';
import './MessageForm.css';




class MessageForm extends React.Component {



    // static propTypes = {
    //        onSubmitMessage: PropTypes.func.isRequired,
    // };
    state = {
        header:'',
        message:'',
    };


    handleHeaderChange = (e) => {
        console.log('HeaderMessage: текст свободного ввода заголовка изменён - '+ e.target.value);
        this.setState({header: e.target.value});
    };

    handleMessageChange = (e) => {
        console.log('TextMessage: текст свободного ввода текста изменён - ' + e.target.value);
        this.setState({message: e.target.value});
    };

    handleSubmit = (e) => {
        console.log('Кнопка send нажата - ');
        e.preventDefault();
        console.log('submitMessage' + '  ' + 'header:' + this.state.header + ',   message:   ' + this.state.message);
        this.props.onSubmitMessage({header: this.state.header, message: this.state.message});
        this.setState({header:'', message: ''});

    };

    render() {
        console.log('Render MessageForm');
        return (
            <div className='MessageForm' >
                <form className='FormForum'>
                    <div className='InputBlock'>
                        <label htmlFor='header' className='HeaderMessage'>Header</label>
                        <input type='text' name="header" onChange={this.handleHeaderChange} id='header' className={this.state.header ? 'Header-control-active' : 'Header-control'}  value={this.state.header} placeholder="Type header" required autoFocus />
                    </div>
                    <div className='InputBlock'>
                        <label htmlFor='message' className='TextMessage'>Message</label>
                        <textarea id='message' name="message" className={this.state.message ? 'Message-control-active' : 'Message-control'}  value={this.state.message} onChange={this.handleMessageChange} placeholder='Type your message' maxLength='140' rows='7'/>
                    </div>
                    <input type="submit" value="Submit" onSubmit={this.handleSubmit} disabled={!this.state.header || !this.state.message} />
                </form>
            </div>
        )
    }

}
// const mapStateToProps = state => {
//     return {
//         messages: state.messages
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        onSubmitMessage: messageArray => {
            dispatch(submitMessage(messageArray))
        }
    }
};

export default connect(null, mapDispatchToProps)(MessageForm);

