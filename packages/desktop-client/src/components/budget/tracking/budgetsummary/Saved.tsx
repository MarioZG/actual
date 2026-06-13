import React from 'react';
import type { CSSProperties } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { AlignedText } from '@actual-app/components/aligned-text';
import { styles } from '@actual-app/components/styles';
import { Text } from '@actual-app/components/text';
import { theme } from '@actual-app/components/theme';
import { Tooltip } from '@actual-app/components/tooltip';
import { View } from '@actual-app/components/view';
import { css } from '@emotion/css';

import { useTrackingSheetValue } from '#components/budget/tracking/TrackingBudgetComponents';
import { makeAmountFullStyle } from '#components/budget/util';
import { FinancialText } from '#components/FinancialText';
import { PrivacyFilter } from '#components/PrivacyFilter';
import { useFormat } from '#hooks/useFormat';
import { trackingBudget } from '#spreadsheet/bindings';
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
      {/* {projected ? (
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
      )}

      <Tooltip
        style={{ ...styles.tooltip, fontSize: 14, padding: 10 }}
        content={
          <>
            <AlignedText
              left={t('Projected savings:')}
              right={
                <FinancialText style={makeAmountFullStyle(budgetedSaved)}>
                  {format(budgetedSaved, 'financial-with-sign')}
                </FinancialText>
              }
            />
            <AlignedText
              left={t('Difference:')}
              right={
                <FinancialText style={makeAmountFullStyle(diff)}>
                  {format(diff, 'financial-with-sign')}
                </FinancialText>
              }
            />
          </>
        }
        placement="bottom"
        triggerProps={{
          isDisabled: Boolean(projected),
        }}
      >
        <View
          className={css({
            fontSize: 25,
            color: projected
              ? theme.templateNumberUnderFunded
              : isNegative
                ? theme.budgetNumberNegative
                : theme.templateNumberFunded,
          })}
        >
          <PrivacyFilter>{format(saved, 'financial')}</PrivacyFilter>
        </View>
      </Tooltip>
    */}</View>

    
  );
}
