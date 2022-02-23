import { NextComponentType } from 'next';
import { chdir } from 'process';

const Date: NextComponentType = ({ children }) => {
    return <> {children?.toString().split('-').reverse().join('.')}</>;
};

export default Date;
