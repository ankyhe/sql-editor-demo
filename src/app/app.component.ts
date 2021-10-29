import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as codemirror from 'codemirror';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('ref', { static: true }) ref: ElementRef;
  editor: codemirror.EditorFromTextArea;

  constructor() {}

  ngOnInit(): void {
    const options: any = {
      tables: {
        'SERIAL_DIFF()': [],
        'WITH': [],
        'MAX': [],
        horizon: ['session', 'session_snapshot'],
        session_uuid: [],
        _event_minute: [],
        podid: [],
        poolid: [],
        s_status: [],
        s_type: [],
        table1: ['concurrent_session_count'],
        result_table: ['max_concurrent_session_count']
      },
    };

    this.editor = codemirror.fromTextArea(this.ref.nativeElement, {
      mode: 'text/x-sql',
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      autofocus: true,
      showHint: true,
      hintOptions: options as codemirror.ShowHintOptions,
      extraKeys: { 'Ctrl-P': 'autocomplete' },
    });
  }
}
