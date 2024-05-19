import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Danger from '../../component/alerts/Danger';
import Footer from '../../component/layout/footer';
import Header from '../../component/layout/header';
import PageHeader from '../../component/layout/pageheader';
import SocialMedia from '../../component/section/socialmedia';
import ImageUploading from 'react-images-uploading';
import Navigate from '../../../../util/Navigate';
import Data from '../../../../util/Data';
import Textarea from '../../component/form/textarea';
import Loading from '../../component/alerts/Loading';
import Glitch from 'glitch-javascript-sdk';

const title = "Registration Step 2 of 4";

function CreatorOnboardinStep2Page() {
  const [bio, setBio] = useState('');
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Glitch.api.Users.me().then(response => {
      setUser(response.data.data);
      setBio(response.data.data.bio)
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const updateAccount = (event) => {
    event.preventDefault();
    setIsLoading(true);
    let data = { bio };
    Glitch.api.Users.update(data).then(response => {
      setIsLoading(false);
      navigate(Navigate.creatorsOnboardingStep3Page());
    }).catch(error => {
      setIsLoading(false);
      navigate(Navigate.creatorsOnboardingStep3Page());
    });
  };

  const imageOnChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const saveImage = (event, index) => {
    event.preventDefault();
    setIsLoadingImage(true);
    let image = images[index];
    const blob = Data.dataURItoBlob(image.data_url);
    Glitch.api.Users.uploadAvatarImageBlob(blob).then(response => {
      setUser(response.data.data);
      setImages([]);
      setIsLoadingImage(false);
    }).catch(error => {
      setIsLoadingImage(false);
      console.log(error);
    });
  };

  return (
    <Fragment>
      <div className="login-section padding-top padding-bottom">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <hr />
            <form className="account-form">
              <img src={user.avatar ? user.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} alt="Avatar" />
              <ImageUploading
                multiple
                value={images}
                onChange={imageOnChange}
                maxNumber={1}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps
                }) => (
                  <div className="upload__image-wrapper">
                    <button
                      type="button"
                      className="btn btn-warning"
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Upload New Image
                    </button>
                    &nbsp;
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" width="400" />
                        <div className="image-item__btn-wrapper">
                          <button type="button" className="btn btn-success" onClick={(e) => saveImage(e, index)}>{isLoadingImage ? <Loading /> : ''} Save Image</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
              <h3 className="title">Bio</h3>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <Textarea name="description" onChange={(e) => setBio(e.target.value)} placeholder="Enter your bio that describes you." value={bio}>{bio}</Textarea>
                    {errors.bio && errors.bio.map((name, index) => <Danger message={name} key={index} />)}
                  </div>
                </div>
              </div>
              {errors.map((name, index) => <Danger message={name} key={index} />)}
              <div className="form-group">
                <button type="button" className="d-block default-button" onClick={updateAccount}><span>{isLoading ? <Loading /> : ''} Next Step</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default CreatorOnboardinStep2Page;
