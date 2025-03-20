import React, { type ComponentProps, memo, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { Button } from '@actual-app/components/button';
import { SvgDotsHorizontalTriple } from '@actual-app/components/icons/v1';
import { Menu } from '@actual-app/components/menu';
import { Popover } from '@actual-app/components/popover';
import { styles } from '@actual-app/components/styles';
import { theme } from '@actual-app/components/theme';
import { View } from '@actual-app/components/view';

import { RenderMonths } from './RenderMonths';
import { getScrollbarWidth } from './util';
import { InlineField } from '@actual-app/components/inline-field';

type BudgetTotalsMonthlyProps = {
  MonthComponent: ComponentProps<typeof RenderMonths>['component'];
};

export const BudgetTotalsMonthly = memo(function BudgetTotals({
  MonthComponent
}: BudgetTotalsMonthlyProps) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  return (
    <View
      data-testid="budget-totals"
      style={{
        backgroundColor: theme.tableBackground,
        flexDirection: 'row',
        flexShrink: 0,
        boxShadow: styles.cardShadow,
        marginLeft: 5,
        marginRight: 5 + getScrollbarWidth(),
        borderRadius: '4px 4px 0 0',
        borderBottom: '1px solid ' + theme.tableBorder,
      }}
    >
      <View
        style={{
          width: 200,
          color: theme.pageTextLight,
          justifyContent: 'center',
          paddingLeft: 15,
          paddingRight: 5,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >

        <View style={{ flexGrow: '1', flexDirection: 'column' }}>
          <View style={{ flexGrow: '1', flexDirection: 'column', display: 'inline' }}>
          <View style={{ flexGrow: '1', flexDirection: 'column' }}>
              <Trans>Income</Trans>
            </View>
            <View style={{ flexGrow: '1', flexDirection: 'column' }}>
              <Trans>Spend</Trans>
            </View>
            <View style={{ flexGrow: '1', flexDirection: 'column', borderTop: '1px solid ', paddingBottom: '5px' }}>
              <Trans>Moth balance</Trans>
            </View> 
            {/* <View style={{ flexGrow: '1', flexDirection: 'column' , paddingBottom: '5px'}}>
              <Trans>Cash at EOM</Trans>
            </View>             */}
            <View style={{ flexGrow: '1', flexDirection: 'column' }}>
              <Trans>Y. Income</Trans>
            </View>
            <View style={{ flexGrow: '1', flexDirection: 'column' }}>
              <Trans>Y. Spend</Trans>
            </View>
            <View style={{ flexGrow: '1', flexDirection: 'column', borderTop: '1px solid ', paddingBottom: '5px' }}>
              <Trans>Cash at EOY</Trans>
            </View> 
          </View>
        </View>

      </View>
      <RenderMonths component={MonthComponent} />
    </View>
  );
});
