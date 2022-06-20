import React, { useState, useEffect } from 'react';
import { AuthNav } from '../../components';
import styles from './Main.module.css';
import '../../App.css';
import { Sign, GenerateKeys, Verify } from '../../pages';

function Main() {
  const [currentPath, setCurrentPath] = useState('Generate');
  return (
    <div>
      <AuthNav currentPath={currentPath} setCurrentPath={setCurrentPath} />
      {currentPath === 'Generate' && <GenerateKeys />}
      {currentPath === 'Signature' && <Sign />}
      {currentPath === 'Verify' && <Verify />}
    </div>
  );
}

export default Main;
