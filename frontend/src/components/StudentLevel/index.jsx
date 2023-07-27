import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function StudentLevel() {
    const { level } = useContext(UserContext);
    console.log(level)
    return (
        level
    );
}
