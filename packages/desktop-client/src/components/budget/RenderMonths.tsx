import React, { useContext } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import { theme } from '@actual-app/components/theme';
import { View } from '@actual-app/components/view';
import * as monthUtils from '@actual-app/core/shared/months';

import { SheetNameProvider } from '#hooks/useSheetName';

import { MonthsContext } from './MonthsContext';
import { useBudgetMode } from '../../hooks/useBudgetMode';

type RenderMonthsProps = {
  children: ReactNode | (({ month }: { month: string }) => ReactNode);
  style?: CSSProperties;
};

export function RenderMonths({ children, style }: RenderMonthsProps) {
  const { months } = useContext(MonthsContext);
  //onsole.log(`uuuu args  (${args})`);

  return months.map((month, index) => {
    const isBudgetModeEnabled = useBudgetMode();    
    const flex = !isBudgetModeEnabled && month.endsWith("03") ? 2 : 1;
    //console.log(`uuuu month  (${month})`);
    return (
      <SheetNameProvider key={index} name={monthUtils.sheetForMonth(month)}>
        <View
          style={{
            flex: flex,
            borderLeft: '1px solid ' + theme.tableBorder,
            ...style,
          }}
        >
          {typeof children === 'function' ? children({ month }) : children}
        </View>
      </SheetNameProvider>
    );
  });
}
