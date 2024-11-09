import { Switch } from '@headlessui/react'
import clsx from 'clsx';

type BtnSize = "small" | "normal";

type ExternalSwitchProps = {
  state: boolean
  switch_state: () => void
  size?: BtnSize
}


function ExternalSwitch({ state, switch_state, size = "normal" }: ExternalSwitchProps) {

  const size_style =
    size === 'normal' ?
      'h-6 w-11'
      : 'h-4 w-9';
  const btn_style =
    size === 'normal' ?
      'size-4 group-data-[checked]:translate-x-6'
      : 'size-3 group-data-[checked]:translate-x-5';


  return (
    <Switch
      checked={state}
      onChange={switch_state}
      className={clsx("group inline-flex  items-center rounded-full bg-gray-600 transition data-[checked]:bg-primary-500", size_style)}
    >
      <span className={clsx(btn_style, "translate-x-1 rounded-full bg-white transition")} />
    </Switch>
  );
}

export default ExternalSwitch;
