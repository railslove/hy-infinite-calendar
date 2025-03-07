/* eslint-disable sort-keys */
import React from 'react';
import {addDecorator, storiesOf} from '@kadira/storybook';
import InfiniteCalendar from '../';
import styles from './stories.scss';

// Date manipulation utils
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import endOfMonth from 'date-fns/end_of_month';
import format from 'date-fns/format';
import isBefore from 'date-fns/is_before';
import subMonths from 'date-fns/sub_months';

const CenterDecorator = story => <div className={styles.center}>{story()}</div>;
addDecorator(CenterDecorator);

const today = new Date();


const stories = storiesOf('Basic settings', module)
stories.add('Customized version', () => <InfiniteCalendar  />)
stories.add('With preselected dates', () => <InfiniteCalendar selected={{
  start: today,
  end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8)
}} />)
stories.add('With preselected dates in disabled range', () => <InfiniteCalendar selected={{
  start: today,
  end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8)
}} maxDate={new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)} minDate={today}/>)
