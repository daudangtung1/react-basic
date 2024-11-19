import React from "react";

class TextComponent extends React.Component {
    /**
     * 0. JXX tra ve ma html, muc dich de co the code js trong ma html
     * 1. render bat buoc phai co 1 div ben ngoai
     * 2. neu khong muon co div, thi dung React.Fragment, hoac <></> (doi voi phien ban react tu 16 tro len)
     * 3. state dung de cap nhat data ma khong can phai reload page 
     */

    state = {
        name: 'Tung',
        address: 'Nghe An'
    }

    render() {
        let { name, address } = this.state;

        return (
            <>
                <div className="text-red">
                    Đây là {name}.
                </div>
                <div className="text-blue">
                    Đến từ {address}
                </div>
            </>
        )
    }
}

export default TextComponent;