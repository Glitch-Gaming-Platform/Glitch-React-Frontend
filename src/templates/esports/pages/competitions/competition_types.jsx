import React from 'react';
import { Fragment } from 'react';
import Header from '../../component/layout/header';
import PageHeader from '../../component/layout/pageheader';
import Glitch from 'glitch-javascript-sdk';


const CompetitionTypes = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={Glitch.util.LabelManager.getCompetitionLabel(true, true) + ' Types'} curPage={'Learn about different types of ' + Glitch.util.LabelManager.getCompetitionLabel(true, true)} />
            <div className=" padding-top padding-bottom">
                <div className=" container">
                    <div className="stream-wrapper text-left" style={{textAlign : "left"}}>


                        <h3 className="title text-center">{Glitch.util.LabelManager.getCompetitionLabel(false, true)} Types</h3>

                        <p className="lead">Learn about the different types of {Glitch.util.LabelManager.getCompetitionLabel(false, false)}.</p>

                        <h3>Single Elimination</h3>
                        <p>
                            In a single elimination tournament, each participant or team gets only one chance to compete. The tournament begins with all participants in a bracket, and as the tournament progresses, each match eliminates half of the remaining participants. Winners move on to the next round, while losers are eliminated. This continues until there is only one participant or team left, who becomes the champion.
                        </p>

                        <h3>Double Elimination</h3>
                        <p>
                            In a double elimination tournament, participants have the opportunity to recover from a single loss. The tournament begins with a regular single elimination bracket, but participants who lose a match are moved to a separate bracket called the loser's bracket. Losers from the winner's bracket can continue competing in the loser's bracket. The champion is determined when one participant or team remains undefeated in the winner's bracket and defeats the winner of the loser's bracket in the final match.
                        </p>

                        <h3>Multilevel</h3>
                        <p>
                            A multilevel tournament is a format that allows participants of different skill levels or divisions to compete against each other. Participants are initially divided into different levels or divisions based on their skill or ranking. Each level or division operates as a separate tournament, with winners from each level advancing to the next level. The champions from each level then compete against each other to determine the overall tournament winner.
                        </p>

                        <h3>Straight Round Robin</h3>
                        <p>
                            In a straight round-robin tournament, each participant or team plays against every other participant or team once. There are no separate rounds or elimination stages. The tournament schedule is structured so that each participant faces all others in a fair and balanced manner. Points or wins are accumulated throughout the tournament, and the participant or team with the most points or wins at the end is declared the winner.
                        </p>

                        <h3>Round Robin Double Split</h3>
                        <p>
                            A round-robin double split tournament is an extended version of the straight round-robin format. In this type of tournament, each participant or team plays against every other participant or team twice. The tournament is split into two phases or splits, with the matches rearranged for the second split based on the results of the first split. Points or wins are accumulated separately for each split, and the participant or team with the highest combined points or wins from both splits is declared the winner.
                        </p>

                        <h3>Round Robin Triple Split</h3>
                        <p>
                            A round-robin triple split tournament is similar to the round-robin double split, but with an additional split. Each participant or team plays against every other participant or team three times, and the tournament is split into three phases or splits. The scheduling and rearrangement of matches for each split are based on the results of the previous splits. The participant or team with the highest combined points or wins from all three splits emerges as the tournament winner.
                        </p>

                        <h3>Round Robin Quadruple Split</h3>
                        <p>
                            A round-robin quadruple split tournament expands upon the concept of the round-robin triple split. Each participant or team plays against every other participant or team four times, and the tournament is divided into four splits or phases. The matches in each split are scheduled and rearranged based on the results of the previous splits. The participant or team with the highest combined points or wins from all four splits becomes the overall tournament champion.
                        </p>

                        <h3>Semi-Round Robin</h3>
                        <p>
                            A semi-round robin tournament is a modified version of the round-robin format that is used when the number of participants is too large for each participant to play against every other participant. In a semi-round robin, participants are divided into smaller groups or divisions. Within each division, a round-robin format is used, where each participant plays against every other participant. After the round-robin stage, the top performers from each division advance to a knockout stage, such as single elimination or double elimination, to determine the final winner.
                        </p>

                        <h3>Extended</h3>
                        <p>
                            An extended tournament is a flexible format that allows for a longer duration of competition or multiple stages. It can be used in various tournament types, such as single elimination or round-robin. The extended format may include additional rounds, matches, or phases to accommodate a larger number of participants or to provide more opportunities for competition. The specific structure and rules of the extended tournament can vary based on the requirements and preferences of the organizers.
                        </p>
                    </div>
                </div>
            </div>
            /</Fragment>
    );
}

export default CompetitionTypes;
