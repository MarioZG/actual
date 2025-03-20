import React, { type CSSProperties } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { AlignedText } from '@actual-app/components/aligned-text';
import { styles } from '@actual-app/components/styles';
import { Text } from '@actual-app/components/text';
import { theme } from '@actual-app/components/theme';
import { Tooltip } from '@actual-app/components/tooltip';
import { View } from '@actual-app/components/view';
import { css } from '@emotion/css';

import { trackingBudget } from 'loot-core/client/queries';

import { PrivacyFilter } from '../../../PrivacyFilter';
import { useFormat } from '../../../spreadsheet/useFormat';
import { makeAmountFullStyle } from '../../util';
import { useTrackingSheetValue } from '../TrackingBudgetComponents';
import { childrenToReact } from 'react-markdown/lib/ast-to-react';
import { CellValue, CellValueText } from '../../../spreadsheet/CellValue';
import { Row } from 'react-stately';
import { border } from '../../../../style/colors';

type SavedProps = {
  projected: boolean;
  style?: CSSProperties;
};
export function Saved({ projected, style }: SavedProps) {
  const { t } = useTranslation();
  const budgetedSaved =
    useTrackingSheetValue(trackingBudget.totalBudgetedSaved) || 0;
  const totalSaved = useTrackingSheetValue(trackingBudget.totalSaved) || 0;
  const format = useFormat();
  const saved = projected ? budgetedSaved : totalSaved;
  const isNegative = saved < 0;
  const diff = totalSaved - budgetedSaved;
  const cashflow  = useTrackingSheetValue(trackingBudget.cashflow) || 0;

  return (
    <View style={{ alignItems: 'center', fontSize: 14, ...style }}>
      {projected ? (
        <View style={{ color: theme.pageTextLight, flexDirection: 'row'  }}>
          { t('Projected balance:')}
                  <View style={{ flexDirection: 'row', paddingLeft: 5}}
          className={css({
            fontSize: 15,
            color: projected
              ? theme.warningText
              : isNegative
                ? theme.errorTextDark
                : theme.upcomingText,
          })}
        >
          <PrivacyFilter>{format(saved, 'financial')}</PrivacyFilter>
        </View>
        </View>
      ) : (
        <View style={{ color: theme.pageTextLight, flexDirection: 'row' }}>
          { t('Balance: ')} 
          <View style={{ flexDirection: 'row', paddingLeft: 5}}
          className={css({
            fontSize: 15,
            color: projected
              ? theme.warningText
              : isNegative
                ? theme.errorTextDark
                : theme.upcomingText,
          })}
        >
          <PrivacyFilter>{format(saved, 'financial')}</PrivacyFilter>
        </View>
        </View>
      )}

      {projected ? (
        <View style={{ color: theme.pageTextLight, flexDirection: 'row'  }}>
          { t('EOM:')}
                  <View style={{ flexDirection: 'row', paddingLeft: 5}}
          className={css({
            fontSize: 20,
            color: projected
              ? theme.warningText
              : isNegative
                ? theme.errorTextDark
                : theme.upcomingText,
          })}
        >
          <PrivacyFilter>{format(cashflow, 'financial')}</PrivacyFilter>
        </View>
        </View>
      ) : (
        <View style={{ color: theme.pageTextLight, flexDirection: 'row' }}>
          { t('EOM: ')} 
          <View style={{ flexDirection: 'row', paddingLeft: 5}}
          className={css({
            fontSize: 20,
            color: projected
              ? theme.warningText
              : isNegative
                ? theme.errorTextDark
                : theme.upcomingText,
          })}
        >
          <PrivacyFilter>{format(cashflow, 'financial')}</PrivacyFilter>
        </View>
        </View>
      )}


    </View>

    
  );
}
