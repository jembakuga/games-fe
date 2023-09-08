import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const WalletPageLayout = (props: Props) => {
  return (
    <><Outlet /></>
  );
};

export default WalletPageLayout;