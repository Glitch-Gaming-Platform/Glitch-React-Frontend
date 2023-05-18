import React from "react";
import Danger from "../../alerts/Danger";
import ImageUploading from 'react-images-uploading';
import Loading from "../../alerts/Loading";


export default function CommunityFormMedia({ mainImageValue, mainImageOnChange, saveMainImage, isLoadingMainImage, bannerImageValue, bannerImageOnChange, saveBannerImage, isLoadingBannerImage, errors }) {

    return (
        <>
        <h3>Update Main Image</h3>
        <div className="form-group text-left">
            <label>Main Image</label>
            <ImageUploading
                multiple
                value={mainImageValue}
                onChange={mainImageOnChange}
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
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
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
                                <img src={image['data_url']} alt="" width="400" />
                                <div className="image-item__btn-wrapper">
                                    <button className="btn btn-success" onClick={saveMainImage}>{isLoadingMainImage ? <Loading /> : ''} Save Image</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
            {errors && errors.name && errors.name.map(function (name, index) {
                return <Danger message={name} key={index} />;
            })}
        </div>


        <h3>Update Banner Image</h3>
        <div className="form-group text-left">
            <label>Main Image</label>
            <ImageUploading
                multiple
                value={bannerImageValue}
                onChange={bannerImageOnChange}
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
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
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
                                <img src={image['data_url']} alt="" width="400" />
                                <div className="image-item__btn-wrapper">
                                    <button className="btn btn-success" onClick={saveBannerImage}>{isLoadingBannerImage ? <Loading /> : ''} Save Image</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
            {errors && errors.name && errors.name.map(function (name, index) {
                return <Danger message={name} key={index} />;
            })}
        </div>
        
        

    </>
    );
}