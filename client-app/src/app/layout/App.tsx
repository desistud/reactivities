import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
    // axios
    //   .get<Activity[]>('http://localhost:5000/api/activities')
    //   .then(response => {
    //     console.log('Response', response);
    //     setActivities(response.data);
    //   });
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading app" />;
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
