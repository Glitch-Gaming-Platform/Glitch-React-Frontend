import { Component, Fragment } from "react";

import Header from '../../component/layout/header'
import PageHeader from '../../component/layout/pageheader'
import AboutSection from '../../component/section/about'
import VideoTestimonial from "../../component/section/videotestimonial";
import SponsorSection from "../../component/section/sponsor";
import ProductSection from "../../component/section/product";
import CtaSection from "../../component/section/cta";
import HrShape from "../../component/layout/hrshape";
import Footer from "../../component/layout/footer";


class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Terms Of Service'} curPage={'About Us'} />
                <div className="container mt-5">
                    <h2 className="text-center mb-4">TERMS OF SERVICE</h2>

                    <p>This Agreement explains your rights and obligations in using the TikTok platform (hereafter referred to as "the Services"). By clicking “Accept”, submitting information, or continuing to use the Services, you confirm that you have read and understand this Agreement.</p>

                    <p><strong>AS-IS.</strong> The Services are provided "as-is". Unless prohibited by law, you agree that accessing the Service is at your sole risk. We disclaim all warranties, express or implied, regarding the Services.</p>

                    <p><strong>SUBJECT TO CHANGE.</strong> The Services can be changed or discontinued at our discretion without prior notice.</p>

                    <p><strong>DISPUTE RESOLUTION – VENUE.</strong> Any disputes will be resolved in Connecticut unless otherwise agreed upon by TikTok.</p>

                    <p><strong>DISPUTE RESOLUTION – ARBITRATION, NO CLASS ACTIONS.</strong> You agree to individual arbitration through the American Arbitration Association (“AAA”). Class actions are not permitted.</p>

                    <p><strong>YOUR LIABILITY.</strong> You are responsible for your use of the Services. You agree to indemnify us against any damages arising from your use.</p>

                    <p><strong>STANDARD OF CARE.</strong> Our sole obligation is to provide the Services "as-is". Unless there's gross negligence or willful misconduct, we're not liable to you or any third party.</p>

                    <p><strong>LIMITATIONS ON LIABILITY.</strong> Any liability on our part will be limited to actual damages. No consequential, special, punitive, or indirect damages can be awarded, even if requested.</p>

                    <p><strong>WE’RE NOT RESPONSIBLE FOR ALL CIRCUMSTANCES.</strong> We're not liable for issues beyond our control, like network interruptions, ISP problems, or third-party attacks.</p>

                    <h3>EXTERNAL FACTORS</h3>
                    <p>Issues beyond our control, including network interruptions, are not our responsibility.</p>

                    <p><strong>TERMINATION BY US.</strong> We can terminate this Agreement at our discretion and may do so without notifying you in advance.</p>

                    <p><strong>AMENDMENTS.</strong> We can change the Services or this Agreement. We'll notify you of significant changes. Continued use of the Services means you accept those changes.</p>

                    <h3 className="text-center mb-4 mt-5">PRIVACY STATEMENT</h3>

                    <p>By accepting these terms, you also accept our Privacy Statement. We respect and aim to protect your privacy.</p>

                    <p><strong>INFORMATION COLLECTED.</strong> Your information stays confidential with TikTok. We have measures to protect your data. We don't share personal identifiable info but may share user activity data with third parties.</p>

                    <p><strong>HOW THE INFORMATION IS USED.</strong> We analyze user data to improve our Services. We might contact you with updates or offerings related to TikTok.</p>

                    <p><strong>UPDATING OR DELETING INFORMATION.</strong> You can modify or delete your data by contacting us.</p>

                </div>
            </Fragment>
        );
    }
}

export default TermsPage;