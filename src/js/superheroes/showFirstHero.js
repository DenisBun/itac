import { setVisibleDataset } from '../utils/setVisibleDataset.js';

export const showFirstHero = () => {
    const firstHero = document.getElementById('0');
    firstHero.style.display = 'flex';
    setVisibleDataset(firstHero, true);
}