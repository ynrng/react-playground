import BinaryGap from './BinaryGap';
import CyclicRotation from './CyclicRotation';
import OddOccurrencesInArray from './OddOccurrencesInArray';
import FrogJmp from './FrogJmp';
import PermMissingElem from './PermMissingElem';
import TapeEquilibrium from './TapeEquilibrium';

const routes = [
  {
    path: '/binary_gap',
    function: BinaryGap,
  },
  {
    path: '/cyclic_rotation',
    function: CyclicRotation,
  },
  {
    path: '/odd_occurrences_in_array',
    function: OddOccurrencesInArray,
  },
  {
    path: '/frog_jmp',
    function: FrogJmp,
  },
  {
    path: '/perm_missing_elem',
    function: PermMissingElem,
    hard: true,
  },
  {
    path: '/tape_equilibrium',
    function: TapeEquilibrium,
    hard: true,
  },
];

export default routes;
