import React, { useState, useEffect, Fragment } from 'react';
import Glitch from 'glitch-javascript-sdk';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import PageHeader from '../../component/layout/pageheader';
import CommunityFormBasic from '../../component/section/communities/form_community_basic';
import Loading from '../../component/alerts/Loading';
import timeouts from '../../../../constants/timeouts';
import Danger from '../../component/alerts/Danger';
import Navigate from '../../../../util/Navigate';
import withRouter from '../../../../util/withRouter';
import PublisherHeader from '../../component/layout/publisherheader';
import { useNavigate } from 'react-router-dom';

const PublisherOnboardinStep2Page = (props) => {
    const [data, setData] = useState({});
    const [templates, setTemplates] = useState([]);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        Glitch.api.Templates.list().then(response => {
            setTemplates(response.data.data);
        }).catch(error => {
            // Handle error if needed
        });
    }, []);

    const handleNameChange = (e) => {
        const name = e.target.value;
        const subdomain = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
        setData({ ...data, name, subdomain });
    };

    const createCommunity = (event) => {
        event.preventDefault();

        setIsLoading(true);

        let tmpData = data;

        // Check if the subdomain contains 'glitch.fun' and modify it
        if (tmpData.subdomain && tmpData.subdomain.includes('glitch.fun')) {
            // Find the index of the first '.' and remove everything after it
            let dotIndex = tmpData.subdomain.indexOf('.');
            if (dotIndex !== -1) {
                tmpData.subdomain = tmpData.subdomain.substring(0, dotIndex);
            }
        }

        Glitch.api.Communities.create(tmpData).then(response => {
            setIsLoading(false);
            navigate(Navigate.publishersOnboardingStep3Page());
        }).catch(error => {
            setIsLoading(false);

            let jsonErrors = error?.response?.data;

            if (jsonErrors) {
                setErrors(jsonErrors);
                setTimeout(() => {
                    setErrors({});
                }, timeouts.error_message_timeout);
            }
        });
    };

    return (
        <Fragment>
            <div className="padding-top padding-bottom">
                <div className="container">
                    <div className="stream-wrapper">
                        <h3 className="title">Create A Business Account</h3>
                        
                        <form className="text-left" style={{ textAlign: "left" }} onSubmit={createCommunity}>
                            <p className='lead text-center'>Before you can create any campaigns, you must first create an business account to manage them. Create one below.</p>
                            <CommunityFormBasic
                                nameValue={data.name}
                                nameOnChange={handleNameChange}
                                taglineValue={data.tagline}
                                taglineOnChange={(e) => setData({ ...data, tagline: e.target.value })}
                                descriptionValue={data.description}
                                descriptionOnChange={(e) => setData({ ...data, description: e.target.value })}
                                subdomainValue={data.subdomain}
                                subdomainOnChange={(e) => setData({ ...data, subdomain: e.target.value })}
                                templateValue={data.template_id}
                                templateOnChange={(e) => setData({ ...data, template_id: e.target.value })}
                                templates={templates}
                                errors={errors}
                            />

                            {Object.keys(errors).length > 0 && <Danger message={"There are error(s) in creating the organization. Please check the form above."} />}

                            <div className="form-group text-center">
                                <button type="submit" className="d-block default-button"><span>{isLoading ? <Loading /> : ''} Create Business Account</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default PublisherOnboardinStep2Page;
