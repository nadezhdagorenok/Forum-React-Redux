import React from 'react';
import PropTypes from 'prop-types';
import './ForumBlock.css';
import { connect } from 'react-redux';
import MessageForm from './MessageForm';
import ForumHistory from './ForumHistory';


static propTypes = {
    messagesList: PropTypes.array.isRequired, // передано из Redux
};

render() {
    console.log('Render ForumBlock');



    let messagesCode=this.props.messagesList.map( (v, index) =>
        <ForumHistory key={index} header={v.header} message={v.message} />
);

        return (
            <div className='ForumBlock'>
                <MessageForm/>
                {/*<div className='CountMessage'>*/}
                    {/*<span>Number of messages: </span>*/}
                    {/*/!*<span>{this.state.countMessage}</span>*!/*/}
                {/*</div>*/}
                <ul className='MessageBlock'>{messagesCode}</ul>

            </div>
        );

    }

}

const mapStateToProps = function(store) {
    return {
        messages: store.messages
    };
};

export default connect(mapStateToProps)(ForumBlock);










