import * as Component from '../../components';
import {useState, useEffect, useContext} from 'react';
import Footer from '../../components/Footer/index.jsx';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function searchTeacher() {

return (
    <>
            <div class="general wf-section">
                <div class="overview fluentcontent wf-section">
                    <div class="content-wrapper-m-copy center content-section-title">
                        <div class="w-richtext">
                            <div class="w-embed">
                            <h1 class="page-title">Student</h1>
                                <Component.Greetings />      
                                <Component.Logout />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
