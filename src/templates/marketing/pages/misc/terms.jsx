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
                    <h1 className="text-center mb-4">TERMS OF SERVICE</h1>
                    <p>This Agreement explains your rights and obligations in using the Glitch platform (hereafter referred to as "the Services"). By clicking “Accept”, submitting information, or continuing to use the Services, you confirm that you have read and understand this Agreement.</p>

                    <h5>1. AS-IS</h5>
                    <p>The Services are provided "as-is". Unless prohibited by law, you agree that accessing the Service is at your sole risk. We disclaim all warranties, express or implied, regarding the Services.</p>

                    <h5>2. SUBJECT TO CHANGE</h5>
                    <p>The Services can be changed or discontinued at our discretion without prior notice.</p>

                    <h5>3. USER CONDUCT</h5>
                    <p>You are responsible for all the content you post, stream, or otherwise make available through the Services. You agree not to use the Services for any unlawful purposes or to conduct any unlawful activity, including, but not limited to fraud, embezzlement, money laundering or insider trading.</p>

                    <h5>4. INTELLECTUAL PROPERTY</h5>
                    <p>Unless otherwise specified, all materials appearing on the Services, including the text, design, logos, graphics, icons and images, as well as the selection, assembly and arrangement thereof, are the sole property of Invirtu Labs, Inc., or its licensors. You may not use, reproduce, modify or distribute such content without our express written permission.</p>

                    <h5>5. DISPUTE RESOLUTION – VENUE</h5>
                    <p>Any disputes will be resolved in Connecticut unless otherwise agreed upon by Invirtu Labs, Inc.</p>

                    <h5>6. DISPUTE RESOLUTION – ARBITRATION, NO CLASS ACTIONS</h5>
                    <p>You agree to individual arbitration through the American Arbitration Association (“AAA”). Class actions are not permitted.</p>

                    <h5>7. YOUR LIABILITY</h5>
                    <p>You are responsible for your use of the Services. You agree to indemnify us against any damages arising from your use.</p>

                    <h5>8. STANDARD OF CARE</h5>
                    <p>Our sole obligation is to provide the Services "as-is". Unless there's gross negligence or willful misconduct, we're not liable to you or any third party.</p>

                    <h5>9. LIMITATIONS ON LIABILITY</h5>
                    <p>Any liability on our part will be limited to actual damages. No consequential, special, punitive, or indirect damages can be awarded, even if requested.</p>

                    <h5>10. EXTERNAL FACTORS</h5>
                    <p>Issues beyond our control, including network interruptions, are not our responsibility.</p>

                    <h5>11. TERMINATION BY US</h5>
                    <p>We can terminate this Agreement at our discretion and may do so without notifying you in advance.</p>

                    <h5>12. AMENDMENTS</h5>
                    <p>We can change the Services or this Agreement. We'll notify you of significant changes. Continued use of the Services means you accept those changes.</p>

                    <h5>13. ENTIRE AGREEMENT</h5>
                    <p>This Agreement constitutes the entire agreement between you and Invirtu Labs, Inc. regarding the use of the Services.</p>

                    <h5>14. SEVERABILITY</h5>
                    <p>If any provision in this Agreement is held invalid or unenforceable, that provision shall be construed in a manner consistent with applicable law to reflect the original intentions of the parties, and the remaining provisions shall remain in full force and effect.</p>

                    <h5>15. GOVERNING LAW</h5>
                    <p>This Agreement shall be governed by and construed under the laws of the state of Connecticut without regard to its conflict of law principles.</p>
                </div>
            </Fragment>
        );
    }
}

export default TermsPage;