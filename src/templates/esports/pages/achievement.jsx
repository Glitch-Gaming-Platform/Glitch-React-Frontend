import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";


let TabOneContentList = [
    {
        imgUrlOne: 'assets/images/achivement/01.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'July 18, 2021',
        title: 'IEM Cologne',
        position: '2nd',
    },
    {
        imgUrlOne: 'assets/images/achivement/01.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy2.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 20, 2021',
        title: 'BLAST Premier: Spring Finals 2021',
        position: '3rd',
    },
    {
        imgUrlOne: 'assets/images/achivement/01.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy3.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 17, 2021',
        title: 'RLCS Season X - North American Championship',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/01.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 12, 2021',
        title: 'Intel Extreme Masters XVI - Summer',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/01.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: '	May 23, 2021',
        title: 'RLCS Season X - Spring: NA Major',
        position: '2nd',
    },
]


let TabTwoContentList = [
    {
        imgUrlOne: 'assets/images/achivement/02.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'July 18, 2021',
        title: 'IEM Cologne',
        position: '2nd',
    },
    {
        imgUrlOne: 'assets/images/achivement/02.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy2.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 20, 2021',
        title: 'BLAST Premier: Spring Finals 2021',
        position: '3rd',
    },
    {
        imgUrlOne: 'assets/images/achivement/02.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy3.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 17, 2021',
        title: 'RLCS Season X - North American Championship',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/02.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 12, 2021',
        title: 'Intel Extreme Masters XVI - Summer',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/02.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: '	May 23, 2021',
        title: 'RLCS Season X - Spring: NA Major',
        position: '2nd',
    },
]

let TabThreeContentList = [
    {
        imgUrlOne: 'assets/images/achivement/03.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'July 18, 2021',
        title: 'IEM Cologne',
        position: '2nd',
    },
    {
        imgUrlOne: 'assets/images/achivement/03.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy2.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 20, 2021',
        title: 'BLAST Premier: Spring Finals 2021',
        position: '3rd',
    },
    {
        imgUrlOne: 'assets/images/achivement/03.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy3.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 17, 2021',
        title: 'RLCS Season X - North American Championship',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/03.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 12, 2021',
        title: 'Intel Extreme Masters XVI - Summer',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/03.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: '	May 23, 2021',
        title: 'RLCS Season X - Spring: NA Major',
        position: '2nd',
    },
]

let TabFourContentList = [
    {
        imgUrlOne: 'assets/images/achivement/04.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'July 18, 2021',
        title: 'IEM Cologne',
        position: '2nd',
    },
    {
        imgUrlOne: 'assets/images/achivement/04.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy2.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 20, 2021',
        title: 'BLAST Premier: Spring Finals 2021',
        position: '3rd',
    },
    {
        imgUrlOne: 'assets/images/achivement/04.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy3.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 17, 2021',
        title: 'RLCS Season X - North American Championship',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/04.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 12, 2021',
        title: 'Intel Extreme Masters XVI - Summer',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/04.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: '	May 23, 2021',
        title: 'RLCS Season X - Spring: NA Major',
        position: '2nd',
    },
]

let TabFiveContentList = [
    {
        imgUrlOne: 'assets/images/achivement/05.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'July 18, 2021',
        title: 'IEM Cologne',
        position: '2nd',
    },
    {
        imgUrlOne: 'assets/images/achivement/05.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy2.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 20, 2021',
        title: 'BLAST Premier: Spring Finals 2021',
        position: '3rd',
    },
    {
        imgUrlOne: 'assets/images/achivement/05.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy3.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 17, 2021',
        title: 'RLCS Season X - North American Championship',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/05.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 12, 2021',
        title: 'Intel Extreme Masters XVI - Summer',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/05.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: '	May 23, 2021',
        title: 'RLCS Season X - Spring: NA Major',
        position: '2nd',
    },
]

let TabSixContentList = [
    {
        imgUrlOne: 'assets/images/achivement/06.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'July 18, 2021',
        title: 'IEM Cologne',
        position: '2nd',
    },
    {
        imgUrlOne: 'assets/images/achivement/06.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy2.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 20, 2021',
        title: 'BLAST Premier: Spring Finals 2021',
        position: '3rd',
    },
    {
        imgUrlOne: 'assets/images/achivement/06.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy3.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 17, 2021',
        title: 'RLCS Season X - North American Championship',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/06.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 12, 2021',
        title: 'Intel Extreme Masters XVI - Summer',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/06.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: '	May 23, 2021',
        title: 'RLCS Season X - Spring: NA Major',
        position: '2nd',
    },
]

let TabSevenContentList = [
    {
        imgUrlOne: 'assets/images/achivement/07.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'July 18, 2021',
        title: 'IEM Cologne',
        position: '2nd',
    },
    {
        imgUrlOne: 'assets/images/achivement/07.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy2.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 20, 2021',
        title: 'BLAST Premier: Spring Finals 2021',
        position: '3rd',
    },
    {
        imgUrlOne: 'assets/images/achivement/07.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy3.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 17, 2021',
        title: 'RLCS Season X - North American Championship',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/07.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: 'June 12, 2021',
        title: 'Intel Extreme Masters XVI - Summer',
        position: '3rd-4th',
    },
    {
        imgUrlOne: 'assets/images/achivement/07.png',
        imgAltOne: 'achivement thumb',
        imgUrlTwo: 'assets/images/achivement/trofy.svg',
        imgAltTwo: 'Svg Thumb',
        date: '	May 23, 2021',
        title: 'RLCS Season X - Spring: NA Major',
        position: '2nd',
    },
]


class AchievementPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'OUR ACHIEVEMENTS'} curPage={'ACHIEVEMENT'} />
                <div className="achievement-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="achievement-area">
                                <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation" title="Pubg Lite">
                                        <button className="nav-link active" id="tabOne-tab" data-bs-toggle="tab" data-bs-target="#tabOne" type="button" role="tab" aria-controls="tabOne" aria-selected="false"><img src="/assets/images/achivement/01.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Rockstar Games">
                                        <button className="nav-link" id="tabTwo-tab" data-bs-toggle="tab" data-bs-target="#tabTwo" type="button" role="tab" aria-controls="tabTwo" aria-selected="false"><img src="/assets/images/achivement/02.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Valorant">
                                        <button className="nav-link" id="tabThree-tab" data-bs-toggle="tab" data-bs-target="#tabThree" type="button" role="tab" aria-controls="tabThree" aria-selected="false"><img src="/assets/images/achivement/03.png" alt="achievement" /></button>
                                    </li>

                                    <li className="nav-item" role="presentation" title="Apex Legends">
                                        <button className="nav-link" id="tabFour-tab" data-bs-toggle="tab" data-bs-target="#tabFour" type="button" role="tab" aria-controls="tabFour" aria-selected="false"><img src="/assets/images/achivement/04.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Assassins Creed">
                                        <button className="nav-link" id="tabFive-tab" data-bs-toggle="tab" data-bs-target="#tabFive" type="button" role="tab" aria-controls="tabFive" aria-selected="false"><img src="/assets/images/achivement/05.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Duty Mobile">
                                        <button className="nav-link" id="tabSix-tab" data-bs-toggle="tab" data-bs-target="#tabSix" type="button" role="tab" aria-controls="tabSix" aria-selected="false"><img src="/assets/images/achivement/06.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Epic Games">
                                        <button className="nav-link" id="tabSeven-tab" data-bs-toggle="tab" data-bs-target="#tabSeven" type="button" role="tab" aria-controls="tabSeven" aria-selected="false"><img src="/assets/images/achivement/07.png" alt="achievement" /></button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabOneContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>
                                                            <img src={`${val.imgUrlTwo}`} alt={`${val.imgAltTwo}`} height="34" width="29.565" />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabTwo" role="tabpanel" aria-labelledby="tabTwo-tab">
                                        <table className="table text-white table-responsive">
                                            <tbody>
                                                {TabTwoContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>
                                                            <img src={`${val.imgUrlTwo}`} alt={`${val.imgAltTwo}`} height="34" width="29.565" />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabThree" role="tabpanel" aria-labelledby="tabThree-tab">
                                        <table className="table text-white table-responsive">
                                            <tbody>
                                                {TabThreeContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>
                                                            <img src={`${val.imgUrlTwo}`} alt={`${val.imgAltTwo}`} height="34" width="29.565" />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabFour" role="tabpanel" aria-labelledby="tabFour-tab">
                                        <table className="table text-white table-responsive">
                                            <tbody>
                                                {TabFourContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>
                                                            <img src={`${val.imgUrlTwo}`} alt={`${val.imgAltTwo}`} height="34" width="29.565" />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabFive" role="tabpanel" aria-labelledby="tabFive-tab">
                                        <table className="table text-white table-responsive">
                                            <tbody>
                                                {TabFiveContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>
                                                            <img src={`${val.imgUrlTwo}`} alt={`${val.imgAltTwo}`} height="34" width="29.565" />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabSix" role="tabpanel" aria-labelledby="tabSix-tab">
                                        <table className="table text-white table-responsive">
                                            <tbody>
                                                {TabSixContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>
                                                            <img src={`${val.imgUrlTwo}`} alt={`${val.imgAltTwo}`} height="34" width="29.565" />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabSeven" role="tabpanel" aria-labelledby="tabSeven-tab">
                                        <table className="table text-white table-responsive">
                                            <tbody>
                                                {TabSevenContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>
                                                            <img src={`${val.imgUrlTwo}`} alt={`${val.imgAltTwo}`} height="34" width="29.565" />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default AchievementPage 