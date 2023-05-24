import Errors from "../../components/form/Errors";
import File from "../../components/form/File";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Textarea from "../../components/form/Textarea";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";


const TeamsFormMedia = ({ getMainImageUrl, mainImageSrc, setMainImageCropper, setBannerImageCropper, bannerImageSrc, getBannerImageUrl, errors }) => {


    return (<>
        <File
            accept="image/png, image/jpeg, image/jpg"
            onChange={getMainImageUrl}
            text="Upload Main Image"
        />

        {mainImageSrc ? (
            <Cropper
                src={mainImageSrc}
                style={{ height: 400, width: 400 }}
                initialAspectRatio={4 / 3}
                minCropBoxHeight={100}
                minCropBoxWidth={100}
                guides={false}
                checkOrientation={false}
                onInitialized={(instance) => {
                    setMainImageCropper(instance);
                }}
            />) : ''}


        <File
            accept="image/png, image/jpeg, image/jpg"
            onChange={getBannerImageUrl}
            text="Upload Banner Image"
        />

        {bannerImageSrc ? (
            <Cropper
                src={bannerImageSrc}
                style={{ height: 400, width: 400 }}
                initialAspectRatio={4 / 3}
                minCropBoxHeight={100}
                minCropBoxWidth={100}
                guides={false}
                checkOrientation={false}
                onInitialized={(instance) => {
                    setBannerImageCropper(instance);
                }}
            />) : ''}

    </>);

}

export default TeamsFormMedia;