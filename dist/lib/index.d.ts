import { _Combo, _ComboStatic } from "./base/combination/combo";
import { _ButtonGroup, _ButtonGroupChooseType, _ButtonGroupStatic } from "./base/combination/group.button";
import { _Tab, _TabStatic } from "./base/combination/tab";
import { _Pane, _PaneStatic } from "./base/pane";
import { _BasicButton, _BasicButtonStatic } from "./base/single/button/button.basic";
import { _Button, _ButtonStatic } from "./base/single/button/buttons/button";
import { _TextButton, _TextButtonStatic } from "./base/single/button/buttons/button.text";
import { _IconTextItem, _IconTextItemStatic } from "./base/single/button/listitem/icontextitem";
import { _Editor, _EditorStatic } from "./base/single/editor/editor";
import { _Checkbox, _CheckboxStatic } from "./base/single/input/checkbox";
import { _AbstractLabel } from "./base/single/label/abstract.label";
import { _Label } from "./base/single/label/label";
import { _Single } from "./base/single/single";
import { _Text } from "./base/single/text";
import { _Trigger } from "./base/single/trigger/trigger";
import { _IconChangeButton, _IconChangeButtonStatic } from "./case/button/icon/icon.change";
import { _MultiSelectItem, _MultiSelectItemStatic } from "./case/button/item.multiselect";
import { _BubbleCombo, _BubbleComboStatic } from "./case/combo/bubblecombo/combo.bubble";
import { _TextValueCombo, _TextValueComboStatic } from "./case/combo/combo.textvalue";
import { _SignEditor, _SignEditorStatic } from "./case/editor/editor.sign";
import { _LoadingPane } from "./case/loading/loading_pane";
import { _AllValueMultiTextValueCombo, _AllValueMultiTextValueComboStatic } from "./component/allvaluemultitextvaluecombo/allvalue.multitextvalue.combo";
import { _Action, _ActionFactory } from "./core/action/action";
import { _ShowAction } from "./core/action/action.show";
import { _base } from "./core/base";
import { _Behavior, _BehaviorFactory } from "./core/behavior/behavior";
import { _HighlightBehavior } from "./core/behavior/behavior.highlight";
import { _RedMarkBehavior } from "./core/behavior/behavior.redmark";
import * as decorator from "./core/decorator/decorator";
import { _func } from "./core/func";
import { _i18n } from "./core/i18n";
import { _OB } from "./core/ob";
import { _Widget, _WidgetStatic } from "./core/widget";
import { _Layout } from "./core/wrapper/layout";
import { _HTapeLayout, _VTapeLayout } from "./core/wrapper/layout/layout.tape";
declare type ClassConstructor<T extends {}> = T & {
    new (config: any): T;
    (config: any): T;
    readonly prototype: T;
};
export interface BI extends _func, _i18n, _base {
    OB: ClassConstructor<_OB>;
    Widget: ClassConstructor<_Widget> & _WidgetStatic;
    Single: ClassConstructor<_Single>;
    BasicButton: ClassConstructor<_BasicButton> & _BasicButtonStatic;
    Checkbox: ClassConstructor<_Checkbox> & _CheckboxStatic;
    Button: ClassConstructor<_Button> & _ButtonStatic;
    TextButton: ClassConstructor<_TextButton> & _TextButtonStatic;
    IconChangeButton: ClassConstructor<_IconChangeButton> & _IconChangeButtonStatic;
    Trigger: ClassConstructor<_Trigger>;
    Action: ClassConstructor<_Action>;
    ActionFactory: ClassConstructor<_ActionFactory>;
    ShowAction: ClassConstructor<_ShowAction>;
    Behavior: ClassConstructor<_Behavior>;
    BehaviorFactory: ClassConstructor<_BehaviorFactory>;
    HighlightBehavior: ClassConstructor<_HighlightBehavior>;
    RedMarkBehavior: ClassConstructor<_RedMarkBehavior>;
    Pane: ClassConstructor<_Pane> & _PaneStatic;
    LoadingPane: ClassConstructor<_LoadingPane>;
    Tab: ClassConstructor<_Tab> & _TabStatic;
    ButtonGroup: ClassConstructor<_ButtonGroup> & _ButtonGroupChooseType & _ButtonGroupStatic;
    Combo: ClassConstructor<_Combo> & _ComboStatic;
    TextValueCombo: ClassConstructor<_TextValueCombo> & _TextValueComboStatic;
    BubbleCombo: ClassConstructor<_BubbleCombo> & _BubbleComboStatic;
    AllValueMultiTextValueCombo: ClassConstructor<_AllValueMultiTextValueCombo> & _AllValueMultiTextValueComboStatic;
    IconTextItem: ClassConstructor<_IconTextItem> & _IconTextItemStatic;
    MultiSelectItem: ClassConstructor<_MultiSelectItem> & _MultiSelectItemStatic;
    AbstractLabel: ClassConstructor<_AbstractLabel>;
    Label: ClassConstructor<_Label>;
    Text: ClassConstructor<_Text>;
    Editor: ClassConstructor<_Editor> & _EditorStatic;
    SignEditor: ClassConstructor<_SignEditor> & _SignEditorStatic;
    Layout: ClassConstructor<_Layout>;
    HTapeLayout: ClassConstructor<_HTapeLayout>;
    VTapeLayout: ClassConstructor<_VTapeLayout>;
    Decorators: typeof decorator;
}
declare const _default: {
    Decorators: typeof decorator;
};
export default _default;
