import type { CSSProperties, ReactNode } from 'react';
import type { PresetsType } from '@react-three/drei/helpers/environment-assets';
import Loader from './components/loader';
interface AvatarViewProps {
    url: string;
    eyeBlink?: boolean;
    headMovement?: boolean;
    rotateAvatar?: boolean;
    style?: CSSProperties;
    environment?: PresetsType;
    fallback?: ReactNode;
}
export { Loader };
export default function AvatarView({ url, style, rotateAvatar, eyeBlink, headMovement, environment, fallback, }: AvatarViewProps): JSX.Element;
