// export class TaskService {
//     constructor(
//         private backendService: BackendService,
//         private store$: Store<GlobalState>,
//         private api: API,
//         private errorService: ErrorService,
//     ) {}
//
//     public getNewTask$(): Observable<TaskInterface> {
//         return this.fetchNewTask$().pipe(
//             filter((newTask: NewTaskDtoInterface) => !!newTask),
//             tap((newTask: NewTaskDtoInterface) => this.store$.dispatch(new SelectedTaskSet(newTask.id))),
//             switchMap((newTask: NewTaskDtoInterface) => this.fetchTask$(newTask.id)),
//             catchError((error: HttpErrorResponse) => {
//                 this.store$.dispatch(new SelectedTaskReset());
//                 this.errorService.showErrorNotification('Не удалось получить задание');
//
//                 return throwError(new Error(JSON.stringify(error)));
//             }),
//         );
//     }
//
//     public getTask$(taskId: string): Observable<TaskInterface> {
//         return this.store$.pipe(
//             select(getTaskById(taskId)),
//             tap(() => this.fetchTaskIfNotExist$(taskId)),
//              ),
//         );
//     }
//
//     public fetchTaskIfNotExist$(taskId: string): void {
//         this.store$
//             .pipe(
//                 select(getTaskIdsInLoading),
//                 take(1),
//                 filter((taskIds: string[]) => !taskIds.includes(taskId)),
//                 switchMap(() =>
//                     this.store$.pipe(
//                         select(getTaskById(taskId)),
//                         take(1),
//                     ),
//                 ),
//                 filter((task: TaskInterface) => !task),
//                 mergeMap(() => this.fetchTask$(taskId)),
//             )
//             .subscribe();
//     }
//
//     public getPassedEventList$(taskId: string): Observable<TimelineEventInterface[]> {
//         return this.backendService.get$<TimelineEventDtoInterface[]>(this.api.VERIFICATION_TASK(taskId).PASSED_EVENTS);
//     }
//
//     public rejectTaskToSiebel$(taskId: string, data: string[] = []): Observable<void> {
//         return this.backendService
//             .post$<void>(this.api.VERIFICATION_TASK(taskId).REJECT, { body: { note: join(data, ', ') } })
//             .pipe(
//                 catchError((error: HttpErrorResponse) => {
//                     this.errorService.showErrorNotification('Не удалось отправить задание в Siebel');
//
//                     return throwError(new Error(JSON.stringify(error)));
//                 }),
//             );
//     }
//
//     public completeTask$(taskId: string, body: CloseTaskDtoInterface): Observable<void> {
//         return this.backendService.post$<void>(this.api.VERIFICATION_TASK(taskId).COMPLETE, { body }).pipe(
//             catchError((error: HttpErrorResponse) => {
//                 this.errorService.showErrorNotification('Не удалось завершить задание');
//
//                 return throwError(new Error(JSON.stringify(error)));
//             }),
//         );
//     }
//
//     public postponeTask$(taskId: string, body: PostponeTaskDtoInterface): Observable<void> {
//         return this.backendService.post$<void>(this.api.VERIFICATION_TASK(taskId).POSTPONE, { body }).pipe(
//             catchError((error: HttpErrorResponse) => {
//                 this.errorService.showErrorNotification('Не удалось отложить задание');
//
//                 return throwError(new Error(JSON.stringify(error)));
//             }),
//         );
//     }
//
//     private fetchNewTask$(): Observable<NewTaskDtoInterface> {
//         const getNewTaskUrl = this.api.NEW_VERIFICATION_TASK();
//
//         return this.backendService.post$<NewTaskDtoInterface>(getNewTaskUrl, { body: {} }).pipe(
//             filter((newTask: NewTaskDtoInterface) => !!newTask),
//             catchError((error: HttpErrorResponse) => throwError(new Error(JSON.stringify(error)))),
//         );
//     }
//
//     private fetchTask$(taskId: string): Observable<TaskInterface> {
//         const getTaskUrl = this.api.VERIFICATION_TASK(taskId).ID;
//
//         this.store$.dispatch(new LoadTaskRequest(taskId));
//
//         return this.backendService.get$<TaskDtoInterface>(getTaskUrl).pipe(
//             filter((task: TaskDtoInterface) => !!task),
//             map((taskDto: TaskDtoInterface) => convertDtoToTaskInterface(taskDto)),
//             tap((newTask: TaskInterface) => this.store$.dispatch(new SelectedTaskSet(newTask.id))),
//             tap((newTask: TaskInterface) => this.store$.dispatch(new LoadTaskSuccess(newTask))),
//             catchError((error: HttpErrorResponse) => {
//                 this.store$.dispatch(new LoadTaskFailure(taskId));
//
//                 return throwError(new Error(JSON.stringify(error)));
//             }),
//         );
//     }
// }
