import Glitch from 'glitch-javascript-sdk';
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import MessageMessagesList from '../messages/message_messages';


export default function UserItem({ user, is_admin }) {

    const [showModal, setShowModal] = useState(false);
    const [thread, setThread] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    let updateLink = '';

    if (is_admin) {
        updateLink = <Link to={Navigate.accountMainPage()} className="btn btn-warning">Manage</Link>;
    }

    let name = (user.username) ? user.username : user.first_name + ' ' + user.last_name;

    let AuthorSocialList = [];

    if (user.twitter_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-twitter',
                IconLink: user.twitter_page,
            }
        );
    }

    if (user.instagram_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-instagram',
                IconLink: user.instagram_page,
            }
        );
    }

    if (user.twitch_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-twitch',
                IconLink: user.twitch_page,
            }
        );
    }

    if (user.youtube_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-youtube',
                IconLink: user.youtube_page,
            }
        );
    }

    if (user.facebook_page) {
        AuthorSocialList.push(
            {
                IconName: 'icofont-facebook',
                IconLink: user.facebook_page,
            }
        );
    }

    const showMessages = async (userID) => {
        Glitch.api.Messages.createOrGetThread({ users: [Glitch.util.Session.getID(), userID] }).then(response => {
            setThread(response.data.data);
            setShowModal(true);
        }).catch(error => {
            console.error("Failed to create or get thread:", error);
        });
    };
    

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            Glitch.api.Messages.sendMessage({ message: newMessage, thread_id: thread.id }).then(response => {
                // Update the thread with the new message
                setThread({
                    ...thread,
                    messages: [...thread.messages, response.data.data]
                });
                setNewMessage('');
            }).catch(error => {
                console.error("Failed to send message:", error);
            });
        }
    };


    return (
        <>
        <div className="authors">
            <div className="author-thumb">
                <Link to={Navigate.usersProfilePage(user.id)}><img src={(user.avatar) ? user.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} alt="author" /></Link>
            </div>
            <div className="author-content">
                <h6><Link to={Navigate.usersProfilePage(user.id)}>{name}</Link></h6>
                <button className="btn btn-info" type="button" onClick={() => showMessages(user.id)}>
                    <i className="fas fa-envelope"></i> Message
                </button>
                <p>{user.bio}</p>
                <div className="social-media">
                    {AuthorSocialList.map((val, i) => (
                        <a target={"_blank"} href={`${val.IconLink}`} key={i}><i className={`${val.IconName}`}></i></a>
                    ))}
                </div>
            </div>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-black'>Conversation</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-black'>
                    {thread && <MessageMessagesList messages={thread.messages} users={thread.users} />}
                    <div className="mb-3">
                        <label htmlFor="newMessage" className="form-label">Reply</label>
                        <textarea className="form-control" id="newMessage" rows="3" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={sendMessage}>Send <i className="fas fa-paper-plane"></i></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}