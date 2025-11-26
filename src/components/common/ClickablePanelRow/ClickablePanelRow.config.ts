import type { IClickablePanel } from 'components/common/ClickablePanel';
import { PREDEFINED_CLICKABLE_PANELS } from 'components/common/ClickablePanelRow';

export function getClickablePanelLinks(
  predefinedPanelGroupKey: PredefinedClickablePanelGroupKey | string,
): IClickablePanel[] | undefined {
  const key = predefinedPanelGroupKey as PredefinedClickablePanelGroupKey;
  return PREDEFINED_CLICKABLE_PANELS[key];
}

type PredefinedClickablePanelGroupKey =
  keyof typeof PREDEFINED_CLICKABLE_PANELS;

export type PredefinedClickablePanelProps = IClickablePanel & {
  id: NonNullable<IClickablePanel['id']>;
  label: NonNullable<IClickablePanel['label']>;
};

export type PredefinedClickablePanelGroupProps = Record<
  string,
  PredefinedClickablePanelProps[]
>;

export interface IClickablePanelRow {
  groupKey: PredefinedClickablePanelGroupKey | string;
}
