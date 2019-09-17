import { SnapshotPointInterface } from '../interfaces/snapshot-point.interface';

export const constSnapshotPoints: ReadonlyArray<SnapshotPointInterface> = [
    { description: 'Соедините кассу и терминал с помощью кабеля', timestamp: 0 },
    { description: 'На экране кассы нажмите на кнопки', timestamp: 50 },
    { description: 'Забудьте все, что вам сказали', timestamp: 300 },
];

export const TITLE = 'Выполните действия:';

export const SOURCE_VIDEO = '../../../../assets/video.mp4';
