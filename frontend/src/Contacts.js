import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'

const Contacts = (props, scrollRef) => {
    return (
        <div ref={scrollRef} className='contacts-section'>
            <br/><br/><br/><br/>
            <div class="contacts-section-header">
                <h2> Contact me </h2>
            </div>

            <br/><br/><br/><br/>

            <div class="contacts-links">
                <a
                    id="profile-link"
                    href="https://github.com/yimingyinqwqq"
                    target="_blank"
                    rel="noreferrer"
                    class="btn contacts-details"
                ><FaGithub /> GitHub </a
                >
                <a href="/cdn-cgi/l/email-protection#fa9f829b978a969fba9f829b978a969fd4999597" 
                    class="btn contacts-details"
                > <HiOutlineMail /> Send an email </a
                >
            </div>
        </div>
    );
}

export default React.forwardRef(Contacts);