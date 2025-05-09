import Item from '@/components/Item';
import { Helmet } from '@modern-js/runtime/head';
import { useLoaderData } from '@modern-js/runtime/router';
import { List } from 'antd';
import type { LoaderData } from './page.data';

function Index() {
  const { data } = useLoaderData() as LoaderData;

  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={data}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Index;
