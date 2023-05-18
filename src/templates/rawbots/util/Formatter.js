
import Glitch from 'glitch-javascript-sdk';

const Formatter = {

    tournamentType : function(type) {

        if(type == Glitch.constants.CompetitionTypes.DOUBLE_ELIMINATION) {
            return 'Double Elimination';
        } else if(type == Glitch.constants.CompetitionTypes.EXTENDED) {
            return 'Extended';
        } else if(type == Glitch.constants.CompetitionTypes.MULTILEVEL) {
            return 'Multilevel';
        } else if(type == Glitch.constants.CompetitionTypes.ROUND_ROBIN_DOUBLE_SPLIT) {
            return 'Round Robin Double Split';
        } else if(type == Glitch.constants.CompetitionTypes.ROUND_ROBIN_QUADRUPLE_SPLIT) {
            return 'Round Robin Quadriple Split';
        } else if(type == Glitch.constants.CompetitionTypes.ROUND_ROBIN_TRIPLE_SPLIT) {
            return 'Round Robin Triple Split';
        } else if(type == Glitch.constants.CompetitionTypes.SEMI_ROUND_ROBINS) {
            return 'Semi Round Robins';
        } else if(type == Glitch.constants.CompetitionTypes.SINGLE_ELIMINATION) {
            return 'Single Elimination';
        } else if(type == Glitch.constants.CompetitionTypes.STRAIGHT_ROUND_ROBIN) {
            return 'Straight Round Robin';
        } else  {
            return 'Unknown';
        }
    },
    truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
      }
}

export default Formatter;