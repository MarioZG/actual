// @ts-strict-ignore
import React, {
  type CSSProperties,
  type ComponentType,
  type ReactNode,
} from 'react';
import { Trans } from 'react-i18next';

import { styles } from '@actual-app/components/styles';
import { Text } from '@actual-app/components/text';
import { theme } from '@actual-app/components/theme';
import { View } from '@actual-app/components/view';

import { type SheetFields, type Binding } from '../../../spreadsheet';
import { CellValue, CellValueText } from '../../../spreadsheet/CellValue';

type BudgetTotalProps<
  CurrentField extends SheetFields<'tracking-budget'>,
  TargetField extends SheetFields<'tracking-budget'>,
> = {
  title: ReactNode;
  current: Binding<'tracking-budget', CurrentField>;
  target: Binding<'tracking-budget', TargetField>;
  ProgressComponent: ComponentType<{ current; target }>;
  style?: CSSProperties;
};
export function BudgetTotal<
  CurrentField extends SheetFields<'tracking-budget'>,
  TargetField extends SheetFields<'tracking-budget'>,
>({
  title,
  current,
  target,
  ProgressComponent,
  style,
}: BudgetTotalProps<CurrentField, TargetField>) {
  return (
    <View
      style={{
        lineHeight: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 14,
        ...style,
      }}
    >
      <ProgressComponent current={current} target={target} />

      <View style={{ marginLeft: 10 }}>
        <Text>{title}{ ": "}
          <Trans
            i18nKey="<allocatedAmount /> / <totalAmount />"
            components={{
              allocatedAmount: <CellValue binding={current} type="financial" />,
              italic: (
                <Text
                  style={{ color: theme.pageTextSubdued, fontStyle: 'italic' }}
                />
              ),
              totalAmount: (
                <CellValue binding={target} type="financial">
                  {props => (
                    <CellValueText {...props} style={styles.notFixed} />
                  )}
                </CellValue>
              ),
            }}
          />
        </Text>
      </View>
    </View>
  );
}
