/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckCircle } from '@phosphor-icons/react';
import classNames from 'classnames';
import { toast as t } from 'sonner';
// import { Icon } from '~components/UI/IconFont/Icon';

import styles from './index.module.scss';
import Text from '../Text';

export const toast = {
  success: (message: string) => {
    t.custom((id) => (
      <div className="flex items-center gap-3 w-max min-w-xs p-3 text-gray-500 bg-[#EBF3DF] rounded-lg shadow">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <CheckCircle size={24} color="#3E8800" weight="fill" />
        </div>
        <Text type="font-14-400" className="text-black">
          {message}
        </Text>
      </div>
    ));
  },

  error: (message: string) => {
    t.custom((id) => (
      <div className={classNames(styles.msg, styles.msgError)}>
        <div>
          {/* <Icon
            icon='t4font-ic-close-circle-fill'
            color='error-main'
            onClick={() => t.dismiss(id)}
          /> */}
          {/* <Text type='caption2' color='text-primary'>
            {message}
          </Text> */}
        </div>
        {/* <Icon icon='t4font-ic-close' onClick={() => t.dismiss(id)} /> */}
      </div>
    ));
  },
};
