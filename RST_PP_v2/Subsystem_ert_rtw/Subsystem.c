/*
 * File: Subsystem.c
 *
 * Code generated for Simulink model 'Subsystem'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Jun 09 12:05:37 2020
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: NXP->Cortex-M4
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 * Validation result: Not run
 */

#include "Subsystem.h"

/* Block signals and states (auto storage) */
DW rtDW;

/* External inputs (root inport signals with auto storage) */
ExtU rtU;

/* External outputs (root outports fed by signals with auto storage) */
ExtY rtY;

/* Real-time model */
RT_MODEL rtM_;
RT_MODEL *const rtM = &rtM_;

/* Model step function */
void Subsystem_step(void)
{
  real_T rtb_Sum1;

  /* DiscreteFilter: '<S1>/1//S(z)' incorporates:
   *  DiscreteFilter: '<S1>/R(z)'
   *  DiscreteFilter: '<S1>/T(z)'
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Sum1'
   */
  rtb_Sum1 = (((((0.58824 * rtU.In1 + -0.80835 * rtDW.Tz_states[0]) + 0.28632 *
                 rtDW.Tz_states[1]) - ((0.5744 * rtU.In2 + -0.78842 *
    rtDW.Rz_states[0]) + 0.28024 * rtDW.Rz_states[1])) - -0.33945 *
               rtDW.uSz_states[0]) - -0.13345 * rtDW.uSz_states[1]) / 0.47289;

  /* Outport: '<Root>/Out1' incorporates:
   *  DiscreteFilter: '<S1>/1//S(z)'
   */
  rtY.Out1 = rtb_Sum1;

  /* Update for DiscreteFilter: '<S1>/T(z)' incorporates:
   *  Inport: '<Root>/In1'
   */
  rtDW.Tz_states[1] = rtDW.Tz_states[0];
  rtDW.Tz_states[0] = rtU.In1;

  /* Update for DiscreteFilter: '<S1>/R(z)' incorporates:
   *  Inport: '<Root>/In2'
   */
  rtDW.Rz_states[1] = rtDW.Rz_states[0];
  rtDW.Rz_states[0] = rtU.In2;

  /* Update for DiscreteFilter: '<S1>/1//S(z)' */
  rtDW.uSz_states[1] = rtDW.uSz_states[0];
  rtDW.uSz_states[0] = rtb_Sum1;
}

/* Model initialize function */
void Subsystem_initialize(void)
{
  /* (no initialization code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
