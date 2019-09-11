import React, {Component} from 'react';

class ThemeSwitcher extends Component {

    render() {
        return (
            <div>
                <table id="dtBasicExample"
                       className="table table-striped table-bordered table-sm"
                       cellSpacing="0" width="100%">
                    <thead>
                    <tr>
                        <th class="th-sm">Name

                        </th>
                        <th class="th-sm">Position

                        </th>
                        <th class="th-sm">Office

                        </th>
                        <th class="th-sm">Age

                        </th>
                        <th class="th-sm">Start date

                        </th>
                        <th class="th-sm">Salary

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                    </tr>
                    <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>Name
                        </th>
                        <th>Position
                        </th>
                        <th>Office
                        </th>
                        <th>Age
                        </th>
                        <th>Start date
                        </th>
                        <th>Salary
                        </th>
                    </tr>
                    </tfoot>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ThemeSwitcher;