import React from "react";
import DateTimePicker from "react-datetime-picker";
import TournamentTypes from "../../../../../constants/tournament_types";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Select from "../../form/select";
import Textarea from "../../form/textarea";

export default function RoundFormBasicInfo({ roundValue, roundOnChange, titleValue, titleOnChange, overviewValue, overviewOnChange, startDateValue, startDateOnChange, endDateValue, endDateOnChange, checkinEnableValue, checkEnabledOnChange, checkinPriorValue, checkinPriorOnChange, eliminationValue, eliminationOnChange, errors }) {

    return (
        <>
            <h3>Basic Information</h3>
            <div className="form-group text-left">
                <label>Round #</label>
                <Input type="number" name="name" value={roundValue} onChange={roundOnChange} />
                <p className="small">Enter the the number of the round (ie: 1, 2,3, etc). This is the only field that is required.</p>
                {errors && errors.round && errors.round.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Title (Optional)</label>
                <Input type="text" name="name" value={titleValue} onChange={titleOnChange} />
                <p className="small">Give the round an optional title.</p>
                {errors && errors.title && errors.title.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Round Description (Optional)</label>
                <Textarea name="overview" onChange={overviewOnChange} >{overviewValue}</Textarea>
                <p className="small">A description or overview for the round.</p>
                {errors && errors.overview && errors.overview.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-5">
                <label style={{marginRight: "10px"}} >Round Start Date (Optional)</label>
                <DateTimePicker onChange={startDateOnChange} value={startDateValue} />
                {errors && errors.round_start_date && errors.round_start_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-5">
                <label style={{marginRight: "10px"}}>Round End Date (Optional)</label>
                <DateTimePicker onChange={endDateOnChange} value={endDateValue} />
                {errors && errors.round_end_date && errors.round_end_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-2">
                <Input type={"checkbox"} className={"form-checkbox"} value={checkinEnableValue} onChange={checkEnabledOnChange} />
                <label >Check-in Enabled</label>
                <p className="small">Activate if you want users or teams to check-in for this round.</p>
                {errors && errors.checkin_enabled && errors.checkin_enabled.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            
            <div className="form-group text-left">
                <label>Check-in Minutes Prior To Round</label>
                <Input type="number" name="checkin_mintues_prior" value={checkinPriorValue} onChange={checkinPriorOnChange} />
                <p className="small">Enter the number of minutes prior to the round beginning.</p>
                {errors && errors.checkin_mintues_prior && errors.checkin_mintues_prior.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Elimination Type (Optional)</label>
                <Select name="elimination_type" className="form-control" value={eliminationValue} onChange={eliminationOnChange}>
                    <option value={""}>Select an optional elimination method.</option>
                    <option value={TournamentTypes.SINGLE_ELIMINATION}>Single Elimination</option>
                    <option value={TournamentTypes.DOUBLE_ELIMINATION}>Double Elimination</option>
                    <option value={TournamentTypes.MULTILEVEL} >Mutlilevel</option>
                    <option value={TournamentTypes.STRAIGHT_ROUND_ROBIN}>Straight Round Roin</option>
                    <option value={TournamentTypes.ROUND_ROBIN_DOUBLE_SPLIT}>Round Robin Double Split</option>
                    <option value={TournamentTypes.ROUND_ROBIN_TRIPLE_SPLIT}>Round Robin Triple Split</option>
                    <option value={TournamentTypes.ROUND_ROBIN_QUADRUPLE_SPLIT}>Round Robin Quadruple Split</option>
                    <option value={TournamentTypes.SEMI_ROUND_ROBINS}>Semi-Round Roins</option>
                    <option value={TournamentTypes.EXTENDED}>Extended</option>
                </Select>
                <p className="small">If this round elimination type is different from the tournaments default elimination, you can set the elimination type here just for this round.</p>
                {errors && errors.elimination_type && errors.elimination_type.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

        </>
    );
}