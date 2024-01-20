import { Component } from "react";

class PageHeaderTwo extends Component {
    render() { 
        return (
            <section className="pageheader-section" style={{backgroundImage: "url(/assets/images/pageheader/bg.jpg)"}}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            <img src="/assets/images/team/1.png" alt="team" />
                        </div>
                        <h2 className="pageheader-title">Dragon Details</h2>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default PageHeaderTwo;