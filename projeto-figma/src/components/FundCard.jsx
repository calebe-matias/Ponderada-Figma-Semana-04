// src/components/FundCard.jsx
import React from 'react';
import { Card, Typography, Space, Tag, Row, Col, Button } from 'antd';
import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { slugify } from '../utils/slugify';

export default function FundCard({ fund }) {
  const nav = useNavigate();
  const slug = slugify(fund.name);

  return (
    <Card
      size="small"
      hoverable
      bodyStyle={{ padding: 16 }}
      onClick={() => nav(`/fund/${slug}`)}
    >
      <Typography.Title level={5} ellipsis>
        {fund.name}
      </Typography.Title>
      <Typography.Text type="secondary" ellipsis>
        {fund.category}
      </Typography.Text>

      <Space wrap style={{ margin: '8px 0' }}>
        {fund.tags.map(t => (
          <Tag key={t}>{t}</Tag>
        ))}
      </Space>

      <div style={{ borderTop: '1px solid #eee', paddingTop: 8 }}>
        <Row justify="space-between">
          <Col>Aplicação mínima</Col>
          <Col><Typography.Text strong>{fund.min}</Typography.Text></Col>
        </Row>
        <Row justify="space-between">
          <Col>Resgate</Col>
          <Col><Typography.Text strong>{fund.rescue}</Typography.Text></Col>
        </Row>
        <Row justify="space-between">
          <Col>Rent. 12 meses</Col>
          <Col><Typography.Text strong>{fund.retorno}</Typography.Text></Col>
        </Row>
      </div>

      <Row justify="space-between" align="middle" style={{ marginTop: 16 }}>
        <Space>
          <Button 
            size="small" 
            onClick={e => { e.stopPropagation(); nav(`/fund/${slug}/invest`); }}
          >
            Investir
          </Button>
          <Button 
            type="link" 
            size="small" 
            onClick={e => { e.stopPropagation(); nav(`/fund/${slug}`); }}
            icon={<ArrowRightOutlined />}
          >
            Mais detalhes
          </Button>
        </Space>
        <HeartOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
      </Row>
    </Card>
  );
}
