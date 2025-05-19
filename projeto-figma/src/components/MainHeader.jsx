// src/components/MainHeader.jsx
import React from 'react';
import { Layout, Typography, Space, Grid } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { useBreakpoint } = Grid;

export default function MainHeader({ title, subtitle, bg = '#004aad', color = '#fff' }) {
  const nav = useNavigate();
  const screens = useBreakpoint();
  const isMobile = !screens.sm;

  return (
    <Header
      style={{
        background: bg,
        padding: isMobile ? '12px 8px' : '16px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Space onClick={() => nav(-1)} style={{ cursor: 'pointer' }}>
        <LeftOutlined style={{ color, fontSize: isMobile ? 16 : 20 }} />
        <Typography.Title level={isMobile ? 4 : 3} style={{ color, margin: 0 }}>
          {title}
        </Typography.Title>
      </Space>
      {subtitle && (
        <Typography.Text
          style={{
            color,
            marginTop: isMobile ? 4 : 8,
            fontSize: isMobile ? 14 : 16,
          }}
        >
          {subtitle}
        </Typography.Text>
      )}
    </Header>
  );
}
